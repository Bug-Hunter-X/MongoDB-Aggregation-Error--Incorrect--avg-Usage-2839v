# MongoDB Aggregation Error: Incorrect $avg Usage

This repository demonstrates a common error in MongoDB aggregation pipelines: using a string instead of a field name in the `$avg` operator.  The incorrect code attempts to calculate the average age of users older than 25, grouped by city, but fails due to the incorrect usage of `$avg`. The corrected code demonstrates the proper usage.