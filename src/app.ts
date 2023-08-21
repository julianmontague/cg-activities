import "./global.css";

import { setupStage } from './utils/canvas';
import { generateImage } from './exercises/exercise-2/solution';

const canvas = setupStage();

generateImage(canvas);