ScudCloud={hasPreference:function(e){return ScudCloud.na("hasPreference")},getPreference:function(e){return ScudCloud.na("getPreference")},setPreference:function(e,n){return ScudCloud.na("setPreference")},canShowHtmlNotifications:function(){return ScudCloud.na("canShowHtmlNotifications")},call:function(e,n){switch(ScudCloud.log(e),e){case"reload":return ScudCloud.reload();case"didStartLoading":return ScudCloud.didStartLoading();case"didFinishLoading":return ScudCloud.didFinishLoading();case"setConnectionStatus":return ScudCloud.setConnectionStatus(n);case"notify":return ScudCloud.notify(n);case"setBadgeCount":return ScudCloud.setBadgeCount(n);case"displayTeam":return ScudCloud.displayTeam(n);case"getModifierKeys":case"updateTitleBarColor":case"disableSecureInput":case"setImage":case"listWindows":case"focusWindow":case"openWindow":case"closeWindow":case"getGeometryForWindow":case"startDownload":case"supportsOpenFileAtPath":case"cancelDownloadWithToken":case"openFileAtPath":case"retryDownloadWithToken":case"pruneTokensFromHistory":case"metadataForDownloads":case"readFindString":}return!1},reload:function(){window.location.reload()},didStartLoading:function(){},didFinishLoading:function(){ScudCloud.populate()},setConnectionStatus:function(e){switch(e){case"online":desktop.enableMenus(!0);break;default:desktop.enableMenus(!1)}},notify:function(e){desktop.sendMessage(e.title,e.content)},setBadgeCount:function(e){desktop.setBadgeCount(e.all_unread_highlights_cnt,e.all_unread_cnt)},displayTeam:function(e){},na:function(e){return ScudCloud.log(e),!1},log:function(e){console.log("ScudCloud."+e)},populate:function(){desktop.populate(JSON.stringify({channels:ScudCloud.listChannels(),teams:ScudCloud.listTeams(),icon:TS.model.team.icon.image_44}))},createSnippet:function(){return TS.ui.snippet_dialog.start()},listChannels:function(){return TS.channels.getUnarchivedChannelsForUser()},listTeams:function(){var e=TS.getAllTeams();return e[0].team_icon={image_44:TS.model.team.icon.image_44},e},quicklist:function(){desktop.quicklist(ScudCloud.listChannels())},join:function(e){return TS.channels.join(e)},setClipboard:function(e){TS.client.ui.file_pasted_sig.dispatch(e,TS.model.shift_key_pressed)},preferences:function(){return TS.ui.prefs_dialog.start()},addTeam:function(){document.location=TS.boot_data.signin_url},getCurrentTeam:function(){var e=TS.getAllTeams();if(null!=e)for(var n=0;e.length;n++)if(e[n].team_url==TS.boot_data.team_url)return e[n].id;return""},logout:function(){document.location=TS.boot_data.logout_url},help:function(){return TS.help_dialog.start()}},document.onpaste=function(e){desktop.pasted(!1)},window.winssb=TSSSB=ScudCloud;
