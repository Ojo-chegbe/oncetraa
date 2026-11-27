import { query } from '../volunteer-backend/database.mjs';
import { staffRequest } from '../volunteer-backend/staff.mjs';

export const GET = request => staffRequest(request, query);
export const PATCH = request => staffRequest(request, query);
