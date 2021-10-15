import tracer from 'dd-trace';

const scope = tracer.scope();
const log = console.log;

tracer.init();
export default tracer;