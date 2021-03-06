/* ************************************************************************

 Copyright:

 License:

 Authors:

 ************************************************************************ */

/**
 * This is the main application class of your custom application "woori"
 *
 * @asset(woori/*)
 */
qx.Class.define("woori.Application", {
    extend : qx.application.Mobile,

    members : {

        /**
         * This method contains the initial application code and gets called
         * during startup of the application
         */
        main : function() {
            // Call super class
            this.base(arguments);

            // Enable logging in debug variant
            if (qx.core.Environment.get("qx.debug")) {
                // support native logging capabilities, e.g. Firebug for Firefox
                qx.log.appender.Native;
                // support additional cross-browser console.
                // Trigger a "longtap" event on the navigation bar for opening it.
                qx.log.appender.Console;
            }

            /*
             -------------------------------------------------------------------------
             Below is your actual application code...
             Remove or edit the following code to create your application.
             -------------------------------------------------------------------------
             */

            var login = new woori.page.Login();
            var overview = new woori.page.Overview();
            var list = new woori.page.List();


            // Add the pages to the page manager.
            var manager = new qx.ui.mobile.page.Manager(false);
            manager.addDetail([
                login,
                list,
                overview
            ]);

            // Initialize the application routing
            this.getRouting().onGet("/", this._show, login);
            this.getRouting().onGet("/list", this._show, list);
            this.getRouting().onGet("/overview", this._show, overview);

            this.getRouting().init();
        },


        /**
         * Default behaviour when a route matches. Displays the corresponding page on screen.
         * @param data {Map} the animation properties
         */
        _show : function(data) {
            this.show(data.customData);
        }
    }
});
