```javascript
// Corrected code
db.users.aggregate([
  {
    $match: { age: { $gt: 25 } }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" }
    }
  }
]);
```
The key change is replacing `"$age"` with `$age` within the `$avg` operator.  This ensures that the aggregation pipeline correctly references the `age` field in the documents.