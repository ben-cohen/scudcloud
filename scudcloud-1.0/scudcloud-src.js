ScudCloud = {
	// App functions
    hasPreference: function(name){
		return ScudCloud.na("hasPreference");
	},
	getPreference: function(name){
		return ScudCloud.na("getPreference");
	},
	setPreference: function(name, value){
		return ScudCloud.na("setPreference");
	},
	canShowHtmlNotifications: function(){
		return ScudCloud.na("canShowHtmlNotifications");
	},
	// TSSSB.call
	call: function(name, args){
		ScudCloud.log(name);
		switch(name){
			case "reload":
				return ScudCloud.reload();
			case "didStartLoading":
				return ScudCloud.didStartLoading();
			case "didFinishLoading":
				return ScudCloud.didFinishLoading();
			case "setConnectionStatus":
				return ScudCloud.setConnectionStatus(args);
			case "notify":
				return ScudCloud.notify(args);
			case "setBadgeCount":
				return ScudCloud.setBadgeCount(args);
			case "displayTeam":
				return ScudCloud.displayTeam(args);
			case "getModifierKeys":
			case "updateTitleBarColor":
			case "disableSecureInput":
			case "setImage":
			case "listWindows":
			case "focusWindow":
			case "openWindow":
			case "closeWindow":
			case "getGeometryForWindow":
			case "startDownload":
			case "supportsOpenFileAtPath":
			case "cancelDownloadWithToken":
			case "openFileAtPath":
			case "retryDownloadWithToken":
			case "pruneTokensFromHistory":
			case "metadataForDownloads":
			case "readFindString":
		}
		return false;
	},
	// TSSSB.call implementations
	reload: function(){
		window.location.reload();
	},
	didStartLoading: function(){
	},
	didFinishLoading: function(){
		ScudCloud.populate();
	},
	setConnectionStatus: function(status){
		// "online", "connecting", "offline"
		switch(status){
			case "online": desktop.enableMenus(true); break;
			default: desktop.enableMenus(false);
		}
	},
	notify: function(args){
		desktop.sendMessage(args.title, args.content);
	},
	setBadgeCount: function(args){
		desktop.setBadgeCount(args.all_unread_highlights_cnt, args.all_unread_cnt);
	},
	displayTeam: function(id){
	},
	// ScudCloud internal functions
	na: function(name){
		ScudCloud.log(name);
		return false;
	},
	log: function(name){
		console.log("ScudCloud."+name);
	},
	populate: function(){
		desktop.populate(JSON.stringify({'channels': ScudCloud.listChannels(), 'teams': ScudCloud.listTeams(), 'icon': TS.model.team.icon.image_44}));
	},
	createSnippet: function(){
		return TS.ui.snippet_dialog.start();		
	},
    listChannels: function(){
		return TS.channels.getUnarchivedChannelsForUser();
	},
    listTeams: function(){
		var list = TS.getAllTeams();
		// Fix for current team displaying no icon
		list[0].team_icon = {"image_44":TS.model.team.icon.image_44};
		return list;
	},
    quicklist: function(){
		desktop.quicklist(ScudCloud.listChannels());
	},
	join: function(c){
		return TS.channels.join(c);
	},
	setClipboard: function(data){
		TS.client.ui.file_pasted_sig.dispatch(data, TS.model.shift_key_pressed);
	},
    preferences: function(){
		return TS.ui.prefs_dialog.start();
	},
    addTeam: function(){
		document.location = TS.boot_data.signin_url;
	},
	getCurrentTeam: function(){
		var list = TS.getAllTeams();
		if(list!=null) for(var i=0;list.length;i++){
			if(list[i].team_url==TS.boot_data.team_url){
				return list[i].id;
			}
		}
		return "";
	},
    logout: function(){
		document.location = TS.boot_data.logout_url;
	},
    help: function(){
		return TS.help_dialog.start();
	}
};
document.onpaste = function(e){desktop.pasted(false);};
window.winssb = TSSSB = ScudCloud;
