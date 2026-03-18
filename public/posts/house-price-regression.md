# House Price Prediction using Linear and Polynomial Regression

## 1. Introduction

This project focuses on predicting house prices using machine learning regression techniques. The goal is to understand how different features such as house size, number of rooms, and location score influence the final price of a property.

The project explores both **Linear Regression** and **Polynomial Regression** to compare their performance and understand how model complexity affects prediction accuracy.

---

## 2. Problem Statement

Given a dataset containing housing features:

- Size
- Number of Rooms
- Location Score

The objective is to predict:

- **House Price (continuous value)**

Since the target variable is continuous, this is a **regression problem**.

---

## 3. Dataset Description

- Total Samples: 120
- Features:
  - Size
  - Number of Rooms
  - Location Score
- Target:
  - House Price

### Statistical Summary

The dataset was analyzed using:

- Mean
- Median
- Standard Deviation
- Minimum and Maximum values

This helps in understanding:

- Data distribution
- Variability
- Potential outliers

---

## 4. Exploratory Data Analysis (EDA)

### Key Observations

- The dataset contains multiple input features affecting house prices.
- House price shows a continuous variation → confirms regression problem.
- Some variation exists in features, indicating real-world variability.

EDA helped in:

- Understanding feature relationships
- Identifying patterns in pricing
- Preparing data for modeling

---

## 5. Model Selection

### 5.1 Linear Regression

Linear Regression assumes a **linear relationship** between input features and output.

#### Why used?
- Simple and interpretable
- Good baseline model
- Helps understand feature importance

---

### 5.2 Polynomial Regression

Polynomial Regression extends Linear Regression by adding **non-linear relationships**.

#### Why used?
- Captures complex patterns
- Models curved relationships between features and price
- Improves performance when data is not strictly linear

---

## 6. Model Training Process

### Steps followed:

1. Data preprocessing
2. Feature selection
3. Train-test split (if applied)
4. Model training using:
   - Linear Regression
   - Polynomial Features + Linear Regression
5. Model evaluation

---

## 7. Implementation

Libraries used:

- pandas → data handling  
- numpy → numerical operations  
- matplotlib → visualization  
- sklearn → machine learning  

Models used:

- `LinearRegression`
- `PolynomialFeatures`

---

## 8. Results and Comparison

### Linear Regression

- Simpler model
- Works well for linear relationships
- May underfit if data is non-linear

### Polynomial Regression

- Better at capturing complex patterns
- Improved prediction accuracy
- Risk of overfitting if degree is too high

## Visualisation

The following diagram shows the plots:

![Residual Plot](/posts/images/Regression/residualPlot.png)
![Actual vs Predicted](/posts/images/Regression/ActualvsPredicted.png)
---
## 9. Key Observations

- House price prediction depends on multiple interacting features.
- Linear Regression provides a strong baseline.
- Polynomial Regression improves performance when relationships are non-linear.
- Model selection should balance:
  - Accuracy
  - Complexity
  - Generalization

---

## 10. Conclusion

This project demonstrates how regression models can be used to predict real-world continuous values such as house prices.

Key takeaways:

- Understanding the dataset is crucial before modeling
- Simple models (Linear Regression) are useful baselines
- Advanced models (Polynomial Regression) can improve results
- Feature relationships play a major role in prediction accuracy

---

## 11. Future Improvements

- Use larger datasets
- Apply regularization techniques (Ridge, Lasso)
- Try advanced models (Random Forest, Gradient Boosting)
- Perform cross-validation
- Feature engineering for better performance

---

## 12. GitHub Repository

https://github.com/Avinash-0514/ML-DA-Projects 
