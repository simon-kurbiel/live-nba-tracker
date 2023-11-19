# live-nba-tracker
## a node rest api that tracks live nba scores
## This api has threen endpoints and each response gives a unique data
### 1. The endpoint /api/v1/nba/ will retrieve all scheduled games for the day. if there are no scheduled games, the message will be "No Scheduled Games"
```json I'm B tab
{
    "success": true,
    "msg": "GAMES",
    "data": [
        {
            "name": "Orlando Magic at Indiana Pacers",
            "date": "11/19/2023, 5:00:00 PM",
            "type": "regular-season",
            "stadium": "Gainbridge Fieldhouse",
            "teams": [
                {
                    "team": "Indiana Pacers",
                    "homeAway": "home"
                },
                {
                    "team": "Orlando Magic",
                    "homeAway": "away"
                }
            ]
        }
  ]
}
```

### 2. The endpoint /api/v1/nba/live will retrieve all live games. if there are no live games, the message will be "No Live Games"
```json I'm B tab
{
    "success": true,
    "msg": "GAMES",
    "data": [
        {
            "name": "Philadelphia 76ers at Brooklyn Nets",
            "date": "11/19/2023, 3:00:00 PM",
            "type": "regular-season",
            "stadium": "Barclays Center",
            "teams": [
                {
                    "team": "Brooklyn Nets",
                    "homeAway": "home",
                    "score": "36"
                },
                {
                    "team": "Philadelphia 76ers",
                    "homeAway": "away",
                    "score": "38"
                }
            ],
            "status": {
                "period": 2,
                "timeLeft": "5:48"
            }
        }
    ]
}
```

### 3. The endpoint /api/v1/nba/finished will retrieve all completed games for the day. if there are no live games, the message will be "No Scheduled Games"


