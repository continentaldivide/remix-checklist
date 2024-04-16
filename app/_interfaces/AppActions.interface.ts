interface setCheckedMap {
  type: "set checkedMap";
  checkedMap: Record<string, boolean>;
}

interface toggleChecked {
  type: "toggle checked";
  id: number;
}

export type AppActionsType = setCheckedMap | toggleChecked;
