/**
 * Created by Wind on 4/21/15.
 */
qx.Class.define("woori.page.Abstract", {
    extend : qx.ui.mobile.page.NavigationPage,

    construct : function(wrapContentByGroup) {
        this.base(arguments, wrapContentByGroup);
        this.setShowBackButton(true);
        this.setBackButtonText("Back");
    },

    members : {
        // overridden
        _back : function() {
            qx.core.Init.getApplication().getRouting().back();
        }
    }
});
