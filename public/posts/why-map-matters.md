# Why mAP Matters in Object Detection

mAP stands for mean Average Precision.

In object detection, accuracy alone is not enough because the model must do two things:

1. classify the object correctly
2. locate the object correctly

## Why mAP is useful

mAP combines precision across different recall levels and also considers overlap quality through IoU thresholds.

In my own work, mAP@0.5 was one of the main metrics I used to compare supervised and semi-supervised models.

## What I learned

This made it easier to evaluate overall detection quality rather than relying only on precision or recall individually.