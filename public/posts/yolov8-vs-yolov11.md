# YOLOv8 vs YOLOv11 – What I Observed

In my experiments, I worked with both YOLOv8 and YOLOv11 under similar settings.

Although both models belong to the YOLO family, their practical performance was not identical.

YOLOv11 gave better results in some of my semi-supervised experiments.

## Why the difference may happen

This could be due to architecture improvements, better feature extraction, or stronger optimization behavior.

## What I learned

Model version changes are not just naming updates. They can affect:

- how well the model learns from noisy pseudo-labels
- how stable training becomes
- how well the detector generalizes