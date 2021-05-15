export interface TableColumn {
    name: string;
    dataKey: string;
    sortKey?:string;
    position?: 'right' | 'left';
    isSortable?: boolean; 
    isButton?:boolean;
  }