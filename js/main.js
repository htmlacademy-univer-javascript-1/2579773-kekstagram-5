import {addUploadListeners, setupPhotoSubmission} from './form.js';
import {setupPhotoPreview} from './upload-photo.js';
import {loadPostsFromServer} from './remote-server.js';

loadPostsFromServer();
addUploadListeners();
setupPhotoPreview();
setupPhotoSubmission();
