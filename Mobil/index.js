/**
 * @format
 */

import 'react-native-url-polyfill/auto';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Suppress known warnings
LogBox.ignoreLogs([
  'THREE.WARNING: Multiple instances of Three.js being imported.',
  'EXGL: gl.pixelStorei()',
]);

AppRegistry.registerComponent(appName, () => App);
