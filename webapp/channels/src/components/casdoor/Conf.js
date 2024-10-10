// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable no-process-env */
export const sdkConfig = {
    serverUrl: process.env.REACT_APP_SERVER_URL,
    clientId: process.env.REACT_APP_CLIENT_ID,
    organizationName: process.env.REACT_APP_ORGANIZATION_NAME,
    appName: process.env.REACT_APP_APP_NAME,
    redirectPath: process.env.REACT_APP_REDIRECT_PATH,
};
