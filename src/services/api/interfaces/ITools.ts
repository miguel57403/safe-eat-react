import { Int, PaginationQuery, Uuid } from "../types";

export interface Tool {
  id: Uuid;
  name: string;
  description: string;
  amount: Int;
}

export interface ToolIndex extends PaginationQuery {}

export interface ToolStore {
  name: string;
  amount: Int;
  description: string;
}

export interface ToolUpdate {
  name?: string;
  amount?: Int;
  description?: string;
}

export interface ToolsUpdateParams {
  id: Uuid;
  tools: ToolUpdate;
}
