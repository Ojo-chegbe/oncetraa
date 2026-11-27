import { checkBotId } from 'botid/server';
import { saveVolunteer } from '../volunteer-backend/database.mjs';
import { submitVolunteer } from '../volunteer-backend/intake.mjs';

export function POST(request) {
  return submitVolunteer(request, saveVolunteer, () => checkBotId({
    advancedOptions: { checkLevel: 'basic' },
  }));
}
