// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function internationalOnClick(info, tab) {
	window.open ("https://mail.google.com/a/thoughtworks.com/?AuthEventSource=SSO#inbox".replace(/\?\S*$/, "?view=cm&fs=1&tf=1&source=mailto&travelType=international"));
}
function domesticOnClick(info, tab) {
    window.open ("https://mail.google.com/a/thoughtworks.com/?AuthEventSource=SSO#inbox".replace(/\?\S*$/, "?view=cm&fs=1&tf=1&source=mailto&travelType=domestic"));
}

var id = chrome.contextMenus.create({"title": "International", "contexts":["page"],
                                       "onclick": internationalOnClick, "documentUrlPatterns":["https://mail.google.com/a/thoughtworks.com/*"]});
var id = chrome.contextMenus.create({"title": "Domestic", "contexts":["page"],
									   "onclick": domesticOnClick, "documentUrlPatterns":["https://mail.google.com/a/thoughtworks.com/*"]});