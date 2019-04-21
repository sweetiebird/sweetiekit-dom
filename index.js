const GlobalContext = require('./GlobalContext');
GlobalContext.commands = [];

const contexts = [];
GlobalContext.contexts = contexts;
const _windowHandleEquals = (a, b) => a[0] === b[0] && a[1] === b[1];

const windows = [];
GlobalContext.windows = windows;

