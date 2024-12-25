import {renderAllPosts} from './rendering.js';
import {addUploadListeners} from './form.js';
import {uploadPhoto} from './upload-photo.js';

renderAllPosts();
addUploadListeners();
uploadPhoto();
