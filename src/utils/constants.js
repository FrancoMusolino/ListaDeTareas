const date = new Date();
date.setHours(-3);

export const normalizedDate = date.toISOString().split("T")[0];
