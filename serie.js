var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, link, cover) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.cover = cover;
    }
    Serie.prototype.getId = function () {
        return this.id;
    };
    Serie.prototype.setId = function (id) {
        this.id = id;
    };
    Serie.prototype.getName = function () {
        return this.name;
    };
    Serie.prototype.setName = function (name) {
        this.name = name;
    };
    Serie.prototype.getChannel = function () {
        return this.channel;
    };
    Serie.prototype.setChannel = function (channel) {
        this.channel = channel;
    };
    Serie.prototype.getSeasons = function () {
        return this.seasons;
    };
    Serie.prototype.setSeasons = function (seasons) {
        this.seasons = seasons;
    };
    Serie.prototype.getDescription = function () {
        return this.description;
    };
    Serie.prototype.setDescription = function (description) {
        this.description = description;
    };
    Serie.prototype.getLink = function () {
        return this.link;
    };
    Serie.prototype.setLink = function (link) {
        this.link = link;
    };
    Serie.prototype.getCover = function () {
        return this.cover;
    };
    Serie.prototype.setCover = function (cover) {
        this.cover = cover;
    };
    return Serie;
}());
export { Serie };
