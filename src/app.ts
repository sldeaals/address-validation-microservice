import express, { Express } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
// TODO: Uncomment when production deployment
// import sslRedirect from 'express-sslify';
import { generateRandomString } from './utils';
import routes from './routes';

function configureMiddlewares(app: Express): void {
  // TODO: Uncomment when production deployment
  // app.use(sslRedirect.HTTPS({ trustProtoHeader: true }));
  app.use(
    helmet({
      contentSecurityPolicy: false,
      frameguard: { action: 'deny' },
      noSniff: true,
      xssFilter: true,
    })
  );
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  });
  app.use(limiter);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    session({
      secret: generateRandomString(32),
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000,
      },
    })
  );
}

function setupRoutes(app: Express): void {
  app.use('/api', routes);
}

export function createApp(): Express {
  const app = express();
  configureMiddlewares(app);
  setupRoutes(app);
  return app;
}
