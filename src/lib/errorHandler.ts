import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

export class APIError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'APIError';
  }
}

export function handleAPIError(error: unknown): NextResponse<ErrorResponse> {
  // Handle custom APIError
  if (error instanceof APIError) {
    return NextResponse.json(
      {
        error: error.name,
        message: error.message,
        statusCode: error.statusCode,
      },
      { status: error.statusCode },
    );
  }

  // Handle Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Handle specific Prisma error codes
    switch (error.code) {
      case 'P2002':
        return NextResponse.json(
          {
            error: 'Conflict',
            message: 'A record with this unique field already exists',
            statusCode: 409,
          },
          { status: 409 },
        );
      case 'P2025':
        return NextResponse.json(
          {
            error: 'Not Found',
            message: 'Record not found',
            statusCode: 404,
          },
          { status: 404 },
        );
      default:
        return NextResponse.json(
          {
            error: 'Database Error',
            message: 'A database error occurred',
            statusCode: 500,
          },
          { status: 500 },
        );
    }
  }

  // Handle validation errors
  if (error instanceof Prisma.PrismaClientValidationError) {
    return NextResponse.json(
      {
        error: 'Validation Error',
        message: 'Invalid data provided',
        statusCode: 400,
      },
      { status: 400 },
    );
  }

  // Handle generic errors
  if (error instanceof Error) {
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        message:
          process.env.NODE_ENV === 'development'
            ? error.message
            : 'An unexpected error occurred',
        statusCode: 500,
      },
      { status: 500 },
    );
  }

  // Fallback for unknown errors
  return NextResponse.json(
    {
      error: 'Internal Server Error',
      message: 'An unexpected error occurred',
      statusCode: 500,
    },
    { status: 500 },
  );
}
