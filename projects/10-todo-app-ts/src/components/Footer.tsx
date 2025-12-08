export const Footer: React.FC<Props> = ({
  activeCount,
  todos,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters filterSelected={} onFilterChange={() => {}} />
    </footer>
  );
};
