/**
 * BlogData.js
 * 
 * BlogData functions
 */
class BlogData {
    const _dataSource = "aaaa"

    static getDataSource() {
        return BlogData._dataSource
    }

    static setDataSource(dataSource) {
        BlogData._dataSource = dataSource
    }
}

module.exports = BlogData