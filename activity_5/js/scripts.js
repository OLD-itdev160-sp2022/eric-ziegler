/**
 * Wrap everything in an IIFE
 */
(function(){
    /**
     * Package data and constructor objects
     */

    // Package data array, simulated DB.
    var data = [
        {
            pkgName: "Live Server"
            ,description: "Launch a development local Server with live reload feature for static & dynamic pages"
            ,author: "Ritwick Dey"
            ,url: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
            ,downloads: 19499044
            ,ratings: 364
        }
        ,{
            pkgName: "CSS Peek"
            ,description: "Allow peeking to css ID and class strings as definitions from html files to respective CSS. Allows peek and goto definition."
            ,author: "Pranay Prakash"
            ,url: "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek"
            ,downloads: 2740431
            ,ratings: 71
        }
        ,{
            pkgName: "Guides"
            ,description: "An extension for more guide lines"
            ,author: "spywhere"
            ,url: "https://marketplace.visualstudio.com/items?itemName=spywhere.guides"
            ,downloads: 541798
            ,ratings: 44
        }
    ];

    // Constructor function
    function Package(data){
        this.pkgName = data.pkgName;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.ratings = data.ratings;
        this.selector = data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };

        this.getFormattedRatings = function(){
            return this.ratings.toLocaleString();
        };
    }

    /**
     * Utility functions
     */

    // element name shortcut
    var getEl = function(id){
        return document.getElementById(id);
    };

    // today
    var getTodaysDate = function(){
        return new Date().toDateString();
    };

    // write package data into html elements
    var writePackageInfo = function(package, selectorIndex){
        var nameEl = getEl("p" + selectorIndex + "-name")
            ,descEl = getEl("p" + selectorIndex + "-description")
            ,authEl = getEl("p" + selectorIndex + "-author")
            ,downloadEl = getEl("p" + selectorIndex + "-downloads")
            ,ratingsEl = getEl("p" + selectorIndex + "-ratings")
            ,urlEl = getEl("p" + selectorIndex + "-url");

        nameEl.textContent = package.pkgName;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        ratingsEl.textContent = package.getFormattedRatings();
        urlEl.setAttribute("href", package.url);
    };

    // write date
    getEl("date").textContent = getTodaysDate();

    // write package data one by one
    for(var i = 0; i < data.length; i++){
        var pkg = new Package(data[i]);
        writePackageInfo(pkg, i + 1);
    }
}());