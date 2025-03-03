import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as hbs from "hbs";
import * as hbsUtils from "hbs-utils";
import * as passport from "passport";
import { join } from "path";
import { AppModule } from "./app.module";
import { NotFoundExceptionFilter } from "./common/filters/not-found-exception.filter";
import { flashErrors } from "./common/helpers/flash-errors";
import { hbsRegisterHelpers } from "./common/helpers/hbs-functions";
import flash = require("connect-flash");

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  hbsRegisterHelpers(hbs);
  hbsUtils(hbs).registerWatchedPartials(
    join(__dirname, "..", "src", "views", "layouts")
  );
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "src", "views"));
  hbs.registerPartials(join(__dirname, "..", "src", "views", "partials"));
  app.setViewEngine("hbs");
  app.set("view options", { layout: "layouts/main" });

  app.use(
    session({
      secret: "nest cats",
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  app.use(flashErrors);
  app.useGlobalFilters(new NotFoundExceptionFilter());

  await app.listen(3001);
}

bootstrap();
