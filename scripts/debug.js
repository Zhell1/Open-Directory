const process = require("../public/static/js/process.js");

var category_id;
//category_id = null;
category_id = "ad2e542563f3b6b3a9cbb3a44c52a9f5fa6c95462534e7efc737d05efcfd3481";
process.fetch_from_network(category_id, 0, 3000, [], false).then(rows => {
    console.log("ROWS", rows);
    console.log("found " + rows.length + " total rows");

/*
    var idx = 1;
    for (const row of rows) {
        console.log("#" + idx++);
        console.log(JSON.stringify(row, null, 4));
        console.log("=".repeat(80));
    }

    console.log("\n");

    const results = helpers.processResults(rows);
    results.filter(r => { return r.type == "category" }).map(r => {
        if (r.txid == category_id || r.category == category_id) {
            console.log("**CATEGORY**", r);
        } else {
            console.log("CATEGORY", r);
        }
    });

    console.log("\n");
    console.log("=".repeat(80));
    console.log("\n");

    results.filter(r => { return r.type == "entry" }).map(r => {
        if (r.category == category_id) {
            console.log("**ENTRY**", r);
        } else {
            console.log("ENTRY", r);
        }
    });

    console.log("\n");
    console.log("=".repeat(80));
    console.log("\n");

    results.filter(r => { return r.type == "vote" }).map(r => {
        console.log("VOTE", r);
    });
    */

}).catch(e => {
    console.log("error", e);
});

//fetch_page_from_network("f7f43cfa064e754f3a84c945222f08b04fb8a70ebef0061da2d8ac85df2ac7c1");

