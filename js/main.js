import {renderAllPosts} from './rendering.js';
import {addUploadListeners} from './form.js';
import {uploadPhoto} from './upload-photo.js';
import {getData} from './remote-server.js';
import {sendPhoto} from './form.js';


const loadPosts = getData((data) => {
  renderAllPosts(data);
}, console.error);

loadPosts();
sendPhoto();

addUploadListeners();
uploadPhoto();
