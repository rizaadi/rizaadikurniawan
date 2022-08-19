import clsx from 'clsx';
function ButtonLink({ children, className = '' }) {
  return (
    <button
      className={clsx(
        'bg-slate-300 rounded py-2 px-4 font-bold inline-block dark:bg-dark',
        className
      )}
    >
      {children}
    </button>
  );
}

export default ButtonLink;
