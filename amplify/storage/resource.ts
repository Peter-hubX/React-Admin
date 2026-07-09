import { defineStorage } from '@aws-amplify/backend';

// Make sure "export" is here!
export const storage = defineStorage({
  name: 'postImages',
  access: (allow) => ({
    'media/*': [
      allow.guest.to(['read', 'write']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
  }),
});