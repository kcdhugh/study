// 방 생성을 기준으로 그룹핑


// 최초 입장시 POST
const request = {
  "name": "string",
  "color": "string",
}


// 작성 POST
const request = {
  "name": "string",
  "dateInfo": [
    { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
    { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
    { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
    { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
  ]
}

// get
// 레인지
// 사용자들의 입력 값
const response = {
  a: {
    사람이름
    가능 시간; [
      1: {
        start date
        end date
      }
    ]
  }
  possibleDate: [
    "string",
    "string",
    "string",
    "string",
  ],
  selectedDate: [
    {
      "userInfo": {
        "name": "string",
        "color": "string"
      },
      "dateInfo": [
        "YYYY-MM-DD-hh-mm",
        "YYYY-MM-DD-hh-mm",
        "YYYY-MM-DD-hh-mm",
        "YYYY-MM-DD-hh-mm",
        "YYYY-MM-DD-hh-mm"
      ]
    },
    {
      "userInfo": {
        "name": "string",
        "color": "string"
      },
      "dateInfo": [
        "YYYY-MM-DD-hh-mm",
        "YYYY-MM-DD-hh-mm",
        "YYYY-MM-DD-hh-mm",
        "YYYY-MM-DD-hh-mm",
        "YYYY-MM-DD-hh-mm"
      ]
    },  
  ]
}



b = {
  range: {
    startDate: "string",
    endDate: "string"
  },
  selectedDate: [
    {
      "name": "string",
      "dateInfo": [
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
      ]
    },
    {
      "userInfo": {
        "name": "string",
        "color": "string",
      },
      // date 에 관한 통일하고, string[]
      // 정렬?
      "dateInfo": [
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
      ]
    },
    {
      "userInfo": {
        "name": "string",
        "color": "string",
      },
      // date 에 관한 통일하고, string[]
      // 정렬?
      "dateInfo": [
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
        { startDate: "YYYY-MM-DD-hh-mm", endDate: "YYYY-MM-DD-hh-mm"},
      ]
    }
  ]
}


req = {
  "name": "string",
  "dateInfo": [
    { startDate: "string", endDate: "string"},
    { startDate: "string", endDate: "string"},
    { startDate: "string", endDate: "string"},
    { startDate: "string", endDate: "string"},
  ]
}

res = {
  range: {
    startDate: "string",
    endDate: "string"
  }
}