import { TODO_FILTERS } from "../consts";

const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: "Todos",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "Activos",
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "Activos",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
} as const;

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  return (
    <ul className="filters">
      <li></li>
    </ul>
  );
};
