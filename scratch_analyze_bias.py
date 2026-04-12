import re
import statistics

def analyze_questions(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find questions
    # matches { id: X, ... options: [...], correctIndex: Y, ... }
    question_matches = re.finditer(r'\{[^{}]*?id:\s*(\d+).*?options:\s*\[(.*?)\].*?correctIndex:\s*(\d+).*?\}', content, re.DOTALL)
    
    stats = []
    for match in question_matches:
        qid = match.group(1)
        options_raw = match.group(2)
        correct_idx = int(match.group(3))
        
        # Parse options - this regex handles simple strings in quotes
        options = re.findall(r'["\'](.*?)["\']', options_raw)
        
        if len(options) != 4:
            continue
            
        lengths = [len(opt) for opt in options]
        correct_len = lengths[correct_idx]
        others_len = [lengths[i] for i in range(4) if i != correct_idx]
        avg_others = sum(others_len) / 3
        
        is_longest = correct_len >= max(lengths)
        
        stats.append({
            'id': qid,
            'correct_len': correct_len,
            'avg_others': avg_others,
            'diff': correct_len - avg_others,
            'is_longest': is_longest
        })
    
    if not stats:
        print("No questions found with parsing logic.")
        return

    total = len(stats)
    longest_count = sum(1 for s in stats if s['is_longest'])
    avg_diff = sum(s['diff'] for s in stats) / total
    
    print(f"Total questions analyzed: {total}")
    print(f"Correct answer is the longest: {longest_count} ({longest_count/total*100:.1f}%)")
    print(f"Average length difference (Correct - Others): {avg_diff:.1f} characters")
    
    # Sort by worst offenders
    stats.sort(key=lambda x: x['diff'], reverse=True)
    print("\nTop 5 Bias Offenders:")
    for s in stats[:5]:
        print(f"ID {s['id']}: Correct {s['correct_len']} chars, Others avg {s['avg_others']:.1f} chars, Diff {s['diff']:.1f}")

if __name__ == "__main__":
    analyze_questions('src/data/questions.ts')
