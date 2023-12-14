      console.log(`Test will be executed on ${process.env.NODE_ENV} environment`);
  
      // Execute all the tests if the feature file is not defined.
      const ExecutingFeature = process.env.FEATURE ? `./features/${process.env.FEATURE}.feature` : './features/**/*.feature';
      console.log(`Executing current feature from ${ExecutingFeature}`);
  
      // Execute all the tests with the tag @test by default.
      const ExecutingtTag = process.env.TAG ? `--tags ${process.env.TAG}` : '--tags @test';
      console.log(`Executing current tags as ${ExecutingtTag}`);
  
      const ParallelThread = process.env.MAX_PARALLEL_THREADS ? `--parallel=${process.env.MAX_PARALLEL_THREADS}` : '--parallel=1';
    
      let common = [
        ExecutingtTag,
        '--require ./support/hooks.js',
        ParallelThread,
        ExecutingFeature,
        '-r ./steps/**/*.js',
        '--format-options {"snippetInterface":"async-await"}',
        '-f json:./output/reports/cucumber-json-report.json'
      ].join(' ');
 

      module.exports = {
        default: common
    }