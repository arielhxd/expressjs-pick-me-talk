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
    await models.quiz
      .findAll({
        attributes: {
          exclude: ["categoryId", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: models.category,
            as: "category",
            attributes: ["id", "name"],
          },
        ],
      })
      .then((quizzes) => {
        res.status(202).json({
          status: "success",
          message: "Quizzes fetched successfully",
          data: quizzes || {},
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
  const { question, a, b, c, d, answer, image, categoryId } = req.body;

  try {
    await models.quiz
      .create({
        question,
        a,
        b,
        c,
        d,
        answer,
        image,
        categoryId,
      })
      .then((quiz) => {
        res.status(201).json({
          status: "success",
          message: "Quiz created successfully",
          data: quiz || {},
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

  try {
    await models.quiz
      .findByPk(id, {
        rejectOnEmpty: true,
        attributes: {
          exclude: ["categoryId", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: models.category,
            as: "category",
            attributes: ["id", "name"],
          },
        ],
      })
      .then((quiz) => {
        res.status(206).json({
          status: "success",
          message: "Quiz fetched successfully",
          data: quiz || {},
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
  const { question, a, b, c, d, answer, image, categoryId } = req.body;

  try {
    await models.quiz
      .findByPk(id, {
        rejectOnEmpty: true,
        attributes: {
          exclude: ["categoryId", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: models.category,
            as: "category",
            attributes: ["id", "name"],
          },
        ],
      })
      .then((quiz) => {
        quiz.question = question;
        quiz.a = a;
        quiz.b = b;
        quiz.c = c;
        quiz.d = d;
        quiz.answer = answer;
        quiz.image = image;
        quiz.categoryId = categoryId;
        return quiz.save();
      })
      .then((quiz) => {
        res.status(202).json({
          status: "success",
          message: "Quiz updated successfully",
          data: quiz || {},
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

  try {
    await models.quiz
      .findByPk(id, { rejectOnEmpty: true })
      .then((quiz) => {
        return quiz.destroy();
      })
      .then(() => {
        res.status(202).json({
          status: "success",
          message: "Quiz deleted successfully",
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

/**
 * Display a listing of the resource with specified category.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.categoryId = async (req, res, next) => {
  const id = req.params.id;

  try {
    await models.quiz
      .findAll({
        where: { categoryId: id },
        attributes: {
          exclude: ["categoryId", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: models.category,
            as: "category",
            attributes: ["id", "name"],
          },
        ],
      })
      .then((quizzes) => {
        res.status(202).json({
          status: "success",
          message: "Quizzes fetched successfully",
          data: quizzes || {},
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
