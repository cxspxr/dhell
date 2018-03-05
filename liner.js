module.exports = function() {
    var text = [];

    this.add = function(line) { text.push(line); }
    this.get = function() { return text.join('\n'); }
}
