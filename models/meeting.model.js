const mongoose = require("mongoose");
const { schema } = mongoose;

const meeting = mongoose.model(
  "meeting",
  mongoose.Schema(
    {
      hostId: {
        type: String,
        required: true,
      },
      hostName: {
        type: String,
        required: false,
      },

      startTime: {
        type: Date,
        required: true,
      },

      meetingUsers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "MeetingUser",
        },
      ],
    },
    {
      toJSON: {
        transform: function (doc, ret) {
          (ret.id = ret._id.toString()), delete ret._id;
          delete __v;
        },
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = {
  meeting,
};
