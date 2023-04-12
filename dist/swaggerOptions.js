"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerOptions = void 0;
var swaggerOptions = {
  definition: {
    info: {
      title: "task api"
    }
  },
  apis: ["./src/routes/**/*.js"]
};
exports.swaggerOptions = swaggerOptions;