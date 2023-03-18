module.exports = {
    port: process.env.PORT || 3000,
    db: {
      url: process.env.MONGO_URI || 'mongodb://localhost:27017/mangoHolidays',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
    },
    jwt: {
      secret: process.env.JWT_SECRET || '43319081464c2d3a4f4bc3c1dca222e38df4d264635808bbcdc7542750388cebd287cc29353e56a572bffdb86e56f9acc7d1b3f9e3aee9300777efe73fc158d8',
      expiresIn: '1d',
    },
  };
  