class ApiResponse {
  static ok(res, message, data = null) {
    res.status(200).json({
      status: true,
      message,
      data,
    });
  }

  static created(res, message, data = null) {
    res.status(201).json({
      status: true,
      message,
      data,
    });
  }

  static noContent(res) {
    res.status(204).send();
  }
}

export default ApiResponse;
