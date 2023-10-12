const MeetingPayloadEnum = {
  JOIN_MEETING: "join-meeting",
  JIONED_MEETING: "joined-meeting",
  USER_JOINED: "user-joined",
  CONNECTION_REQUEST: "connection-requset",
  INCOMING_CONNECTION_REQUEST: "incoming-connection-requset",
  OFFER_SDP: "offer-spd",
  ANSWER_SDP: "answer-spd",
  LEAVE_MEETING: "leave-meeting",
  END_MEETING: "end-meeting",
  USER_LEFT: "user-left",
  MEETING_ENDED: "meeting-ended",
  ICE_CANDIDATE: "icecandidate",
  VIDEO_TOGGLE: "video-toggel",
  AUDIO_TOGGLE: "audio-toggel",
  NOT_FOUND: "not-found",
  UNKNOWN: "unknown",
};
module.exports = {
  MeetingPayloadEnum,
};
