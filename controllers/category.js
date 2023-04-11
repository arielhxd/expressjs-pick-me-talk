/**
 * Module dependencies.
 */
const models = require("../models");

/**
 * Display a listing of the resource.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.index = async (req, res, next) => {
  try {
    await models.category
      .findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      })
      .then((categories) => {
        res.status(202).json({
          status: "success",
          message: "Categories fetched successfully",
          data: categories || {},
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
};

/**
 * Store a newly created resource in storage.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.store = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      status: "error",
      message: "Category name is required",
      data: {},
    });
  }

  try {
    await models.category
      .create({
        name,
      })
      .then((category) => {
        res.status(201).json({
          status: "success",
          message: "Category created successfully",
          data: category || {},
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
};

/**
 * Display the specified resource.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.show = async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Category id is required",
      data: {},
    });
  }

  try {
    await models.category
      .findByPk(id, {
        rejectOnEmpty: true,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      })
      .then((category) => {
        res.status(206).json({
          status: "success",
          message: "Category fetched successfully",
          data: category || {},
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
};

/**
 * Update the specified resource in storage.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.update = async (req, res, next) => {
  const id = req.params.id;
  const { name } = req.body;

  if (!id || !name) {
    return res.status(400).json({
      status: "error",
      message: "Category id and name is required",
      data: {},
    });
  }

  try {
    await models.category
      .findByPk(id, {
        rejectOnEmpty: true,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      })
      .then((category) => {
        category.name = name;
        return category.save();
      })
      .then((category) => {
        res.status(202).json({
          status: "success",
          message: "Category updated successfully",
          data: category || {},
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
};

/**
 * Remove the specified resource from storage.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.destroy = async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Category id is required",
      data: {},
    });
  }

  try {
    await models.category
      .findByPk(id, { rejectOnEmpty: true })
      .then((category) => {
        return category.destroy();
      })
      .then(() => {
        res.status(202).json({
          status: "success",
          message: "Category deleted successfully",
          data: null,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
};
