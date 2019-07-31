func removeDuplicates(S string) string {
	i := 0
	
	for i < len(S) - 1 {
		if S[i] == S[i + 1] {
			S = S[0: i] + S[i + 2:]
			i = 0
		} else {
			i += 1
		}
	}

	return S
}