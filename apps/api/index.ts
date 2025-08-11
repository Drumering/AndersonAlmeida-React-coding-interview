import 'reflect-metadata';

import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { ContactsController } from './controllers';
import { logRequest } from './middleware/logger';

const port = 4001;

const app = express();

app.use(logRequest);

useExpressServer(app, {
  cors: true,
  routePrefix: '/api',
  controllers: [ContactsController],
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
