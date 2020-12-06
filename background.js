// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


chrome.runtime.onInstalled.addListener(function() {
    console.log("Hello Chrome.");
});


/* Triger while tab url changed,
   refresh will NOT. */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.url && changeInfo.url.indexOf('google.com/search?') != -1){
      console.log("User google something.");
      /* Get Date */
      var today = new Date();
      var todayStr = today.getFullYear().toString() + today.getMonth().toString() + today.getDate().toString();
      console.log(todayStr);

      chrome.storage.sync.get(todayStr, function(result) {
          var searchTimes = result[todayStr];
          console.log(searchTimes);
          if(searchTimes) {
            searchTimes = searchTimes + 1;
          }
          else{
            searchTimes = 1;
          }
          
          chrome.storage.sync.set({[todayStr]: searchTimes}, function() {
              console.log('Search times is set to ' + searchTimes);
          });
      });
  }
    
});
