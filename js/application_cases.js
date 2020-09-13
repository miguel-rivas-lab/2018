var app = {

	init: function()
	{
		this.cacheDom();
		this.bind();
	},

	cacheDom: function()
	{
		this.$window = $(window);
		this.$document = $(document);
		this.$loader = this.$document.find("aside.loading");
		this.$venovox = this.$document.find(".venobox");

		this.$header = this.$document.find("header");
		this.$filterBtn = this.$header.find("button");

		this.$menu = this.$document.find("nav");
	},

	bind: function()
	{
		this.$window.on("load", this.loading());
		this.$menu.on("click", this.toggleMenu.bind(this));
		this.$filterBtn.on("click", this.hoverIMG.bind(this));
	},

	hoverIMG: function(e)
	{
		var buttonClass = e.currentTarget.className;
		if(buttonClass != ""){
			this.$header.css("background-image","url(img/"+buttonClass+".jpg)");
		}
	},

	loading: function()
	{
		this.$loader.fadeOut(500);
		this.copyRight();
		this.$venovox.venobox();
	},

	toggleMenu: function() {
		this.$menu.toggleClass("show");
	},

	copyRight: function() {
		var kons = '\n';
		kons += '       d8888                                              888             \n';
		kons += '      d88888                                              888             \n';
		kons += '     d88P888                                              888             \n';
		kons += '    d88P 888  .d88b.  888  888  8888b.   .d8888b  8888b.  888888  .d88b.  \n';
		kons += '   d88P  888 d88P"88b 888  888     "88b d88P"        "88b 888    d8P  Y8b \n';
		kons += '  d88P   888 888  888 888  888 .d888888 888      .d888888 888    88888888 \n';
		kons += ' d8888888888 Y88b 888 Y88b 888 888  888 Y88b.    888  888 Y88b.  Y8b.     \n';
		kons += 'd88P     888  "Y88888  "Y88888 "Y888888  "Y8888P "Y888888  "Y888  "Y8888  \n';
		kons += '                  888                                                     \n';
		kons += '             Y8b d88P                                                     \n';
		kons += '              "Y88P"  \n';
		kons += '\n';
		console.log('%c ' + kons, 'color: #96c613');
	},

};

app.init();