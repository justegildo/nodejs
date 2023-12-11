const getFileUploadByUuid = "SELECT * FROM document WHERE uuid = $1 ";

const addFileUpload = " INSERT INTO document (file, filename, mimetype, submission_date, uuid) VALUES ($1, $2, $3, $4, $5) RETURNING id"


module.exports = {
    getFileUploadByUuid,
    addFileUpload
}