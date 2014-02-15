var terminal = function() {



     var cmd = "start";



var examplePlugin = function() {
    text("Hello world!",200,200);
};
var examplePackage = function() {
    var data = cmd;
    var packageThis = [data, data, data];
};
println(cmd);
background(0, 0, 0);
var OAUTH_TOKEN = true;
var API_KEY = "1678a9wda809d8a0s";
var commandData = function(apiData, version, release) {
    if (OAUTH_TOKEN === true) {
        debug("HTTP PROXY: " + API_KEY + " " + OAUTH_TOKEN);
        apiData = API_KEY;
        version = "2.0.1";
        release = "Development Build";
        println("INFO >> HTTP PROXY HAS BEEN ENABLED! KEY: " + API_KEY + " Version: " + version + " Lease: " + release);
    } else {
        println("HTTP PROXY: " + API_KEY + " " + OAUTH_TOKEN);
        debug("ERROR: TOKEN NOT RECEIVED");
        apiData = "ERROR";
        version = "ERROR";
        release = "ERROR";
        println("INFO >> HTTP PROXY HAS BEEN DISABLED! KEY: " + API_KEY + " Version: " + version + " Lease: " + release);
    }
};
commandData(API_KEY, 20, 50);
//Command Difference Position (CMDIF)
var cmdif = 15;
//top_command data stored in global variables
var top_commmandDataList = [5, 15];
var top_commmandData_pos1 = 5;
var top_commmandData_pos2 = 15;
//below_top_command data stored in g:inheritance variables
var below_top_commandList = [5, 30];
//Note the the inheritance example below
var below_top_command_pos1 = top_commmandData_pos1;
var below_top_command_pos2 = top_commmandData_pos2 + cmdif;
//b2_top command data stored in p:inheritance variables
var b2_top_commandList = [5, 45];
var b2_top_command_pos1 = below_top_command_pos1;
var b2_top_command_pos2 = below_top_command_pos2 + cmdif;
if (cmd === "start") {
    
    var consoleFont = createFont("monospace", 20);
    textFont(consoleFont, 15);
    fill(37, 250, 80);
    text(">> Starting Console v1.0 beta...",top_commmandData_pos1,top_commmandData_pos2);
    debug("|start.khanacademy.cs.khansole:c.new|", 50, true);
    text(">> Loading...",below_top_command_pos1,below_top_command_pos2);
    text(">> Done!",b2_top_command_pos1,b2_top_command_pos2);
    
} else if (cmd === "mycommand") {
    
    var consoleFont = createFont("monospace", 20);
    textFont(consoleFont, 15);
    fill(37, 250, 80);
    text(">> This console is a powerful tool.",top_commmandData_pos1,top_commmandData_pos2);
    text(">> You can customize this text.",below_top_command_pos1,below_top_command_pos2);
    
} else {
    var consoleFont = createFont("monospace", 20);
    textFont(consoleFont, 15);
    fill(250, 37, 37);
    text(">> ERROR: Command not recognized.",top_commmandData_pos1,top_commmandData_pos2);
    text(">> Please enter a valid command.",below_top_command_pos1,below_top_command_pos2);
}
};
