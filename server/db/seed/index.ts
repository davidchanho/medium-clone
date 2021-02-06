import EventEmitter from "events";
import { generatePublications } from "./utils";

EventEmitter.defaultMaxListeners = 20;

const seed = () => generatePublications();

seed();
